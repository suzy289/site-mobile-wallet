import { NextRequest, NextResponse } from 'next/server';

const PHP_API_URL = process.env.PRESENTATION_API_URL || 'http://localhost/send%20mail/api/send-presentation.php';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom_complet, email } = body;

    if (!nom_complet || !email) {
      return NextResponse.json(
        { success: false, error: 'Nom complet et email requis.' },
        { status: 400 }
      );
    }

    const res = await fetch(PHP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom_complet, email }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: data.error || 'Erreur serveur' },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur envoi présentation:', error);
    return NextResponse.json(
      { success: false, error: 'Impossible de contacter le serveur. Vérifiez que WAMP et le projet PHP sont actifs.' },
      { status: 500 }
    );
  }
}
