import { NextRequest, NextResponse } from 'next/server';
import { 
  getDocs, 
  collection, 
  query, 
  orderBy, 
  where,
  addDoc,
  limit,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const kategori = searchParams.get('kategori');
    const limitParam = parseInt(searchParams.get('limit') || '10');

    let q = query(collection(db, 'informasi'), orderBy('tanggal', 'desc'));
    
    if (kategori) {
      q = query(q, where('kategori', '==', kategori));
    }

    if (limitParam > 0) {
      q = query(q, limit(limitParam));
    }

    const snapshot = await getDocs(q);
    const informasi = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      tanggal: doc.data().tanggal?.toDate().toISOString(),
      createdAt: doc.data().createdAt?.toDate().toISOString(),
      updatedAt: doc.data().updatedAt?.toDate().toISOString(),
    }));

    return NextResponse.json({
      success: true,
      data: informasi
    });
  } catch (error) {
    console.error('Error fetching informasi:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch informasi',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { judul, isi, kategori } = body;

    if (!judul || !isi || !kategori) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields' 
        },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, 'informasi'), {
      judul,
      isi,
      kategori,
      tanggal: Timestamp.now(),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: 'Informasi created successfully'
    });
  } catch (error) {
    console.error('Error creating informasi:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create informasi',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}