// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://dmutnajqksyhxocmxsuq.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;

// console.log('supabaseKey', supabaseKey);

// if (!supabaseKey) {
//     throw new Error('Supabase key is not defined. Please check your environment variables.');
// }

// export const supabase = createClient(supabaseUrl, supabaseKey);


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL or key is not defined. Please check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
