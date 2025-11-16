import site from "@/config/site.config";

export default function Footer() {
  return (
    <footer className='mt-16 border-t border-pink3/40'>
      <div className='mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6'>
        <div>
          <div className='font-semibold text-slate-900'>{site.siteName}</div>
          <p className='text-sm text-slate-600 mt-2'>{site.address}</p>
        </div>
        <div>
          <div className='font-semibold text-slate-900'>Follow</div>
          <div className='flex gap-3 mt-2'>
            {site.socials.instagram ? (
              <a
                className='underline hover:text-green-600'
                href={site.socials.instagram}
                target='_blank'
                rel='noreferrer'>
                Instagram
              </a>
            ) : null}
            {site.socials.facebook ? (
              <a
                className='underline hover:text-green-600'
                href={site.socials.facebook}
                target='_blank'
                rel='noreferrer'>
                Facebook
              </a>
            ) : null}
          </div>
        </div>
        <div>
          <div className='font-semibold text-slate-900'>Subscribe</div>
          <form className='mt-2 flex gap-2'>
            <input
              placeholder='your@email'
              className='flex-1 rounded-2xl border border-pink3 bg-white px-4 py-3 outline-none focus:border-pink1'
            />
            <button className='btn btn-ghost btn-responsive' type='submit'>
              Join
            </button>
          </form>
        </div>
      </div>
      <div className='text-center text-xs text-slate-500 pb-6'>
        © {new Date().getFullYear()} {site.siteName}. All rights reserved.
      </div>
    </footer>
  );
}
