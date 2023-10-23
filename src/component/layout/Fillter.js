import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import * as apiLanguage from "../../api/Language"
import CheckboxList from "../CheckboxList";

function Fillter() {
  // useState language
  const initLanguage = [
    { id: 1, name: "English" },
    { id: 2, name: "Tiêng việt" },
  ];
  const [languages, setLanguages] = useState(initLanguage);
  // state level start
  const initLevel = [
    {id: 1, name:"Beginner"},
    {id: 2, name: "Intermediate"},
    {id: 3, name:"Advanced"},
  ]
  const [levles,setLevels] = useState(initLevel);
  // state roles subject
  const initRoles = [
    {id:1, name:"Web"},
    {id:2, name:"moblie"},
    {id:3, name:"data"}
  ];
  const [roles,setRoles] = useState(initRoles);

  return (
    <div className="boder-right h-100">
      <CheckboxList className="" title="Ngôn ngữ" Items={languages} />
      <CheckboxList className="mt-2" title="Cấp độ bắt đầu" Items={levles}/>
      <CheckboxList className="mt-2" title="Chuyên nghành" Items={roles}/>
    </div>
  );
}

export default Fillter;
