import {Link} from '@remix-run/react';

export default function Index() {
  return (
    <main>
      <h1 className=" text-white text-5xl">A better way of keeping track of your notes</h1>
      <p className=" text-white pt-4">Try our early beta and never loose track of your notes again!</p>
      <p className='mt-7'>
        <Link to="/notes" className=" bg-amber-100 hover:bg-lime-200 font-bold p-4 rounded"id="cta">Try Now!</Link>
      </p>
    </main>
  );
}
