import React from 'react';
import self from  '../IMG/1725308097719.jpeg';
export default function DashBord() {
    // دالة لتحميل السيرة الذاتية عند الضغط على الزر
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/path-to-your-cv.pdf';  // استبدل بـ مسار السيرة الذاتية الفعلي
        link.download = 'CV_FrontEnd_Developer.pdf';
        link.click();
    };

    return (
        <div className="DashBord">
             <span> Welcome to my Portfolio!</span> 
            <h4>Hi, <span>I'm a Front-End </span> Developer</h4>

            <div className="content">
                <div className="text">
                    <p>
                        I'm a front-end developer with a passion for creating beautiful, functional, and user-centered digital experiences. 
                        My goal is to bring ideas to life and create meaningful experiences through the power of code.
                    </p>
                </div>
                <img 
                    className="Self" 
                    src={self} 
                    alt="self"
                />
            </div>

            <div>   
                <button onClick={handleDownload}>Download CV</button>
            </div>
        </div>
    );
}
