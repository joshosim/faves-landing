
const blogPosts = [
  {
    title: "Ladies Fashion",
    url: 'https://stylishlyme.com/',
    desc: "You will understand the best strategies to look good.",
    imageUrl: '',
  },
  {
    title: "Men's Fashion",
    url: 'https://hespokestyle.com/',
    desc: "Custom tailored menswear to upgrade your style.",
    imageUrl: '',
  },
  {
    title: "Unisex Fashion",
    url: 'https://lisahahnbueck.com/unisex-fashion/',
    desc: "Unisex Fashion is one of the most upcoming wo.......",
    imageUrl: '',
  },
];

export const Blog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Blog</h2>
          <p className="section-description mt-5 ">
            Get insights about your everyday fashion. Look Good, Dress Nice.
          </p>
        </div>
        <p className="section-description mt-5 ">
          Coming Soon.
        </p>
        {/* <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {blogPosts.map(({ title, url, desc, imageUrl, }) => (
            <div key={title} className={twMerge('card', 'border-black bg-black text-white/60')}>
              <img src={imageUrl} alt="" />

              <h3 className={twMerge('text-lg font-bold text-white/60')}>{title}</h3>
              <p className={twMerge('text-lg font-normal text-white/60')}>{desc}</p>
              <a href={`${url}`}>
                <button className={twMerge('btn btn-primary w-full mt-[30px]', 'bg-white text-black')}>Visit Blog</button>
              </a>
            </div>
          ))}
        </div> */}
      </div>
    </section >
  );
};
