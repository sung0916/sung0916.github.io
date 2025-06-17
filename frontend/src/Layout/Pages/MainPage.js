import './MainPage.css';
import { useState } from 'react';

function MainPage() {

    return (
        <div className='page-container'>
            <div id='resume-box'>
                <a
                    href='/files/Resume(KS).pdf'
                    download="성광식_이력서.pdf"
                    className="download-btn"
                    title='PDF 다운받기'
                >
                    이력서 다운로드
                </a>
            </div>

            <div className='files-box'>
                <h2>
                    포트폴리오 다운로드
                </h2>
                <div className='project-box'>
                    <a
                        href='/files/Project(Cinemate).pdf'
                        download="성광식_Cinemate"
                        className="download-btn"
                        title='PDF 다운받기'
                    >
                        Team Project : CineTogether
                    </a>
                    <div className='project-detail'>
                        👑 협력 업체(CGV)의 상품 정보를 소개하는 주된 기능을 가진 쇼핑몰 웹사이트<br/>
                        🌰 영화 정보(줄거리, 예약페이지, 스틸컷 등)를 크롤링하여 고객에게 노출<br/>
                        🌰 회사의 이익을 위한 관련 영화의 굿즈쇼핑몰<br/>
                        🌰 사용자의 신선한 경험을 위한 커뮤니티 - Cinemate(함께 영화관람)<br/>
                        🌰 관리자 페이지(대쉬보드, 회원/관리자 목록, 문의/리뷰 목록 등)<br/>
                        🌰 JWT(Json Web Token)을 활용한 인증/인가 기능<br/>
                    </div>
                </div>
                <div className='project-box'>
                    <a
                        href='/files/Project(Ieum).pdf'
                        download="성광식_Ieum"
                        className="download-btn"
                        title='PDF 다운받기'
                    >
                        Team Project : I-Eum
                    </a>
                    <div className='project-detail'>
                        👑 공공데이터 API를 활용하여 지차체 행사 정보를 소개하는 반응형 웹사이트<br/>
                        🌰 날짜 및 제목, 지역으로 검색하여 특정 행사 검색 기능<br/>
                        🌰 회원 간의 정보 공유(리뷰) 기능<br/>
                        🌰 마이페이지로 개인 활동 내역 조회(찜, 리뷰 목록 등)<br/>
                    </div>
                </div>
                <div className='project-box'>
                    <a
                        href='/files/Project(Artpart).pdf'
                        download="성광식_Artpart"
                        className="download-btn"
                        title='PDF 다운받기'
                    >
                        Team Project : Artpart
                    </a>
                    <div className='project-detail'>
                        👑 전시회(Art) + 숙박(Apartment)를 한공간에서 경험할 수 있는 업체의 반응형 웹사이트<br/>
                        🌰 관리자/사용자 각각의 페이지에서 예약 관리<br/>
                        🌰 DB를 통한 데이터(이미지, 상품금액, 평점 등) 관리<br/>
                        🌰 전체적으로 차분하고 부드러운 질감의 CSS 처리<br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;