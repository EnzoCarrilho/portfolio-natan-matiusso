import video from "../assets/projects/videos/video.mov";
import img1 from "../assets/projects/images/img1.jpeg"
import img2 from "../assets/projects/images/img2.jpg"
import img3 from "../assets/projects/images/img3.jpg"

export const galleryItems = [
  {
    id: 1,
    archive_type: "image",
    src: img2,
    title: "Projeto 1",
    type: "Artístico"
  },
  {
    id: 2,
    archive_type: "video",
    src: video,
    poster: "",
    title: "Projeto 2",
    type: "Campanha"
  },
  {
    id: 3,
    archive_type: "image",
    src: img1,
    title: "Projeto 3",
    type: "Artístico"
  },
  {
    id: 4,
    archive_type: "image",
    src: img3,
    title: "Projeto 4",
    type: "Artístico"
  }
];