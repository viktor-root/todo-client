import React, { useState } from 'react';
import './About.css'

export const About = () => {
      
    return(
    <div className="container_comp_about">
        <div className="About">
            <div className="header_comp_about">
                <h2>ViNotes</h2>
                <span>App version: 1.0.0.<br/>Viktor Gogolev Corporation &copy;</span>
            </div>
            <div className="list_comp_about">
            <ul class="social-icons-7">
                <li><a href="https://vk.com/v.gogolev"><i class="fab fa-vk"></i></a></li>
                <li><a href="https://github.com/viktor-root"><i class="fab fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/250re_na_caberne/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://t.me/paradise_v"><i class="fab fa-telegram"></i></a></li>
            </ul>
            </div>
        </div>
    </div>
    )   
}