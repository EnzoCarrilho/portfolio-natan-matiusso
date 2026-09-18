import video from "../assets/projects/videos/video.mov";
import img1 from "../assets/projects/images/img1.jpeg"
import img2 from "../assets/projects/images/img2.jpg"
import img3 from "../assets/projects/images/img3.jpg"

export const galleryItems = [
  {
    id: 1,
    archive_type: "image",
    src: img2,
    title: "projeto 1",
    type: "artistico"
  },
  {
    id: 2,
    archive_type: "video",
    src: video,
    poster: "",
    title: "projeto 2",
    type: "campanha"
  },
  {
    id: 3,
    archive_type: "image",
    src: img1,
    title: "projeto 3",
    type: "artistico"
  },
  {
    id: 4,
    archive_type: "image",
    src: img3,
    title: "projeto 4",
    type: "artistico"
  }
];