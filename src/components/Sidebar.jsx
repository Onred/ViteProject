import React from 'react'
import '../styles/Sidebar.css'
import { FaGoogle, FaHouse, FaYoutube } from 'react-icons/fa6';

export default function Sidebar() {
  const sample_sidebar_data = [
    {
      text: "Persevere Homepage",
      url: "https://perseverenow.org",
      icon: <FaHouse/>
    },
    {
      text: "Google Search",
      url: "https://google.com",
      icon: <FaGoogle/>
    },
    {
      text: "YouTube",
      url: "https://www.youtube.com",
      icon: <FaYoutube/>
    }
  ]
  
  // let list_items = []
  // for (let sidebar_link of sample_sidebar_data) {
  //   list_items.push(
  //     <li>
  //       <a href={sidebar_link.url}>
  //         {sidebar_link.text}
  //       </a>
  //     </li>
  //   )
  // }
  const list_of_li_elements = sample_sidebar_data.map((sidebar_link) =>
    <li key={sidebar_link.text + "-" + sidebar_link.url}>
      {sidebar_link.icon}
      <a href={sidebar_link.url}>
        {sidebar_link.text}
      </a>
    </li>
  );


  return (
    <div className='sidebar-container'>
      <ul>{list_of_li_elements}</ul>
    </div>
  )
}
