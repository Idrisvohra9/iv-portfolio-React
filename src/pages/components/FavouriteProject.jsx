import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo1.webp";
import { storage } from "../../firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";

export default function FavouriteProjects({title="Placeholder", htmlId}) {
  const [Image, setImage] = useState("");
  const ImageListRef = ref(storage, `${htmlId}/`);
  useEffect(() => {
    listAll(ImageListRef)
      .then((res) => {
        const promises = res.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        const uniqueUrls = Array.from(new Set(urls));
        setImage(uniqueUrls[0]);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching image URLs:", error);
      });
  }, []);
  return (
    <div className="favourite-card col-sm-6 col-lg-4">
      <a className="top-section" href={`#${htmlId}`}>
        <div className="border"></div>
        <div className="icons">
          <div className="logo">
            <img src={logo} alt="Website Logo" className="main-logo"/>
          </div>
        </div>
        <img src={Image} alt="Project Thumbnail" className="img-responsive"/>
      </a>
      <div className="bottom-section">
        <span className="title">{title}</span>
        <div className="row row1">
          <div className="item">
            <span className="big-text">🗿</span>
          </div>
          <div className="item">
            <span className="big-text">⭐</span>
          </div>
          <div className="item">
            <span className="big-text">❤️‍🔥</span>
          </div>
        </div>
      </div>
    </div>
  );
}
