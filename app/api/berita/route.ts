import { NextRequest, NextResponse } from 'next/server';
import { 
  getDocs, 
  collection, 
  query, 
  orderBy, 
  where, 
  limit,
  startAfter,
  addDoc,
  DocumentSnapshot,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limitParam = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const lastId = searchParams.get('lastId');

    let q = query(collection(db, 'berita'), orderBy('tanggal', 'desc'));
    
    if (category) {
      q = query(q, where('kategori', '==', category));
    }

    if (lastId) {
      const lastDocSnapshot = await getDocs(query(collection(db, 'berita'), where('__name__', '==', lastId)));
      if (!lastDocSnapshot.empty) {
        const lastDoc = lastDocSnapshot.docs[0];
        q = query(q, startAfter(lastDoc), limit(limitParam));
      } else {
        q = query(q, limit(limitParam));
      }
    } else {
      q = query(q, limit(limitParam));
    }

    const snapshot = await getDocs(q);
    const berita = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      tanggal: doc.data().tanggal?.toDate().toISOString(),
    }));

    return NextResponse.json({
      success: true,
      data: berita,
      hasMore: snapshot.docs.length === limitParam,
      lastId: snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1].id : null
    });
  } catch (error) {
    console.error('Error fetching berita:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch berita',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { judul, konten, gambar, penulis, kategori } = body;

    if (!judul || !konten || !penulis) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields' 
        },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, 'berita'), {
      judul,
      konten,
      gambar: gambar || '',
      penulis,
      kategori: kategori || 'umum',
      tanggal: Timestamp.now(),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: 'Berita created successfully'
    });
  } catch (error) {
    console.error('Error creating berita:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create berita',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}