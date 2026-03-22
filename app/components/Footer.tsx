'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="new_footer_area">
            <style>{`
                .new_footer_area {
                    background: #fbfbfd;
                    font-family: inherit;
                }
                .new_footer_top {
                    padding: 100px 0px 270px;
                    position: relative;
                    overflow-x: hidden;
                }
                .new_footer_area .footer_bottom {
                    padding-top: 5px;
                    padding-bottom: 40px;
                }
                .footer_bottom {
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 20px;
                    color: #7f88a6;
                    padding: 27px 0px;
                    border-top: 1px solid #e8e8f0;
                }
                .new_footer_top .company_widget p {
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 28px;
                    color: #6a7695;
                    margin-bottom: 20px;
                }
                .new_footer_top .f-title {
                    margin-bottom: 24px;
                    color: #263b5e;
                    font-weight: 600;
                    font-size: 17px;
                }
                .new_footer_top .f_list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .new_footer_top .f_list li {
                    margin-bottom: 11px;
                }
                .new_footer_top .f_list li a {
                    color: #6a7695;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 400;
                    transition: color 0.2s;
                }
                .new_footer_top .f_list li a:hover {
                    color: #5e2ced;
                }
                /* Email input */
                .f_subscribe_two input {
                    width: 100%;
                    border: 1px solid #d8dce8;
                    border-radius: 6px;
                    padding: 10px 14px;
                    font-size: 14px;
                    color: #263b5e;
                    background: #fff;
                    outline: none;
                    margin-bottom: 12px;
                }
                .f_subscribe_two input::placeholder {
                    color: #b0b8d1;
                }
                .btn_get_two {
                    background: #5e2ced;
                    border: 1px solid #5e2ced;
                    color: #fff;
                    padding: 10px 24px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn_get_two:hover {
                    background: transparent;
                    color: #5e2ced;
                }
                /* Social Icons */
                .f_social_icon {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    margin-top: 8px;
                }
                .f_social_icon a {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 1px solid #e2e2eb;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #858da8;
                    text-decoration: none;
                    background: transparent;
                    transition: all 0.2s;
                }
                .f_social_icon a:hover {
                    background: #5e2ced;
                    border-color: #5e2ced;
                    color: #fff;
                }
                /* Footer Background Scenery */
                .new_footer_top .footer_bg {
                    position: absolute;
                    bottom: 0;
                    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png") no-repeat scroll center 0;
                    width: 100%;
                    height: 266px;
                }
                .new_footer_top .footer_bg .footer_bg_one {
                    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center;
                    width: 330px;
                    height: 105px;
                    background-size: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 30%;
                    animation: myfirst 22s linear infinite;
                }
                .new_footer_top .footer_bg .footer_bg_two {
                    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center;
                    width: 88px;
                    height: 100px;
                    background-size: 100%;
                    bottom: 0;
                    left: 38%;
                    position: absolute;
                    animation: myfirst 30s linear infinite;
                }
                @keyframes myfirst {
                    0%   { left: -25%; }
                    100% { left: 100%; }
                }
                /* Grid layout */
                .footer_grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 32px;
                }
                @media (max-width: 1024px) {
                    .footer_grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 640px) {
                    .footer_grid { grid-template-columns: 1fr; }
                }
                .footer_bottom_inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 32px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 8px;
                }
            `}</style>

            {/* ── Top Section ── */}
            <div className="new_footer_top">
                <div className="footer_grid">

                    {/* Col 1 — Get in Touch */}
                    <div>
                        <h3 className="f-title">Get in Touch</h3>
                        <p style={{ fontSize: 15, fontWeight: 300, lineHeight: '28px', color: '#6a7695', marginBottom: 20 }}>Don't miss any updates of our new features and AI tools!</p>
                        <div className="f_subscribe_two">
                            <input type="email" placeholder="Email" />
                            <button className="btn_get_two">Subscribe</button>
                        </div>
                    </div>

                    {/* Col 2 — Download */}
                    <div>
                        <h3 className="f-title">Download</h3>
                        <ul className="f_list">
                            {['Company', 'Android App', 'iOS App', 'Desktop', 'Projects', 'My tasks'].map(item => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Help */}
                    <div>
                        <h3 className="f-title">Help</h3>
                        <ul className="f_list">
                            {['FAQ', 'Terms & Conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map(item => (
                                <li key={item}><Link href="#">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Team Solutions + Social */}
                    <div>
                        <h3 className="f-title">Team Solutions</h3>
                        <div className="f_social_icon">
                            {/* Facebook */}
                            <a href="#" aria-label="Facebook">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                            {/* Twitter / X */}
                            <a href="#" aria-label="Twitter">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" aria-label="LinkedIn">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            {/* Pinterest */}
                            <a href="#" aria-label="Pinterest">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Animated Background Scenery */}
                <div className="footer_bg">
                    <div className="footer_bg_one" />
                    <div className="footer_bg_two" />
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="footer_bottom">
                <div className="footer_bottom_inner">
                    <p style={{ margin: 0, color: '#7f88a6', fontSize: 14 }}>
                        © 2025 Tigrid, Inc. All rights reserved.
                    </p>
                    <p style={{ margin: 0, color: '#7f88a6', fontSize: 14 }}>
                        Made with ❤️ by{' '}
                        <a href="#" style={{ color: '#5e2ced', textDecoration: 'none', fontWeight: 500 }}>Tigrid</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
