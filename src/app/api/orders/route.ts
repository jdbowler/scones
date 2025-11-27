import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const body = await request.json(); // { name, email, phone, selections, pickupDate, notes }

  const { error } = await supabase
    .from('orders')
    .insert(
      [
        {
          name: body.name,
          email: body.email,
          phone: body.phone,
          selections: body.selections, // JSON object
          pickup_date: body.pickupDate,
          notes: body.notes,
        },
      ],
      { returning: 'minimal' } // Prevents implicit select, avoids RLS violation on read
    );

  if (error) {
    console.error('Supabase insert error:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}