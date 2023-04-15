import React from 'react';
import { SectionWrapper } from "../hoc";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer style={{textAlign: "center"}}>{`Copyright © ${year}`}. All rights reserved</footer>;
  };
  
  export default SectionWrapper(Footer, "footer");