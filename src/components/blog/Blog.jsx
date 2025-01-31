import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="my-6 ">
      <h1 className="text-center text-4xl text-primary my-6">Blogs</h1>
      <div className="card bg-base-100 image-full w-[600px]  shadow-xl">
        <figure>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            width={600}
            height={600}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>Top 10 Futsal Fields in Sylhet</p>
        </div>
      </div>
      <div className=" flex  justify-center">
        <div className="btn btn-outline btn-primary my-4"> Load More</div>
      </div>
    </div>
  );
};

export default Blog;
