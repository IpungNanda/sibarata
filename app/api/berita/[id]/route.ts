import { NextRequest, NextResponse } from 'next/server';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const docRef = doc(db, 'berita', params.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Berita tidak ditemukan'
        },
        { status: 404 }
      );
    }

    const berita = {
      id: docSnap.id,
      ...docSnap.data(),
      tanggal: docSnap.data().tanggal?.toDate().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: berita
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