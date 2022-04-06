import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';

import data from './data';




ReactDOM.render(
  <>
<h1 className="head"> Top 3 Netflix Series </h1>

{data.map((val)=>{
return (<Card 
  key={val.id}
  imgsrc={val.src}
  title={val.title}
  seriesname={val.seriesname}
  link={val.link}

/>)
})}

  </>,
  document.getElementById('root')
);

