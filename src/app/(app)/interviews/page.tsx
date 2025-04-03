import StyledLink from "@/components/styled-link";
import React from "react";

function page() {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 ">
        <h2 className="text-3xl font-semibold mb-8">📰 Featured Interviews</h2>
        <VideoInterviews />
      </div>
    </div>
  );
}

const interviews = [
  {
    title:
      "Military Innovations in Azerbaijan: How Military Investment Brought Stability",
    iframe: `<iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/qxW36_nq-QU?list=PLziHV9ieBl0Uk4IzrW4NfxQBF2C9gT7bh" 
                title="Military Innovations in Azerbaijan: How Military Investment Brought Stability" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
             </iframe>`,
  },
  {
    title:
      "ChatGPT: Revolutionizing Education in Azerbaijan and Around The Globe",
    iframe: `<iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/RfxjQhHc_tI?list=PLziHV9ieBl0Uk4IzrW4NfxQBF2C9gT7bh" 
                title="ChatGPT: Revolutionizing Education in Azerbaijan and Around The Globe" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
             </iframe>`,
  },
  {
    title:
      "The Pros and Cons of TikTok: A Discussion on the Innovation of Social Media",
    iframe: `<iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/fQaboG6xEXM?list=PLziHV9ieBl0Uk4IzrW4NfxQBF2C9gT7bh" 
                title="The Pros and Cons of TikTok: A Discussion on the Innovation of Social Media" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
             </iframe>`,
  },
  {
    title: "A Discussion on Innovations",
    iframe: `<iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/b9IhplrhxvQ?list=PLziHV9ieBl0Uk4IzrW4NfxQBF2C9gT7bh" 
                title="A discussion on Innovations" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
             </iframe>`,
  },
  {
    title: "AI: The Most Influential Innovation of Our Time",
    iframe: `<iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/mlr6cvZ8NtQ?list=PLziHV9ieBl0Uk4IzrW4NfxQBF2C9gT7bh" 
                title="AI: The Most Influential Innovation of Our Time" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
             </iframe>`,
  },
];

function VideoInterviews() {
  return (
    <>
      {interviews.map((item, index) => {
        return (
          <div key={index} className="p-2">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: item.iframe }}
              className="p-2"
            />
          </div>
        );
      })}
    </>
  );
}

export default page;
