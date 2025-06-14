import './ImageModal.css';
import green from '../../Images/green_circle.png';
import red from '../../Images/red_circle.png';
import { useCallback, useEffect, useState } from 'react';

function ImageModal({images, initialIndex, onClose}) {
    //보여지는 이미지의 인덱스 관리
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    //다음 이미지 보기(배열 끝이면 처음으로)
    const showNext = useCallback(() => {
        setCurrentIndex((prev) => (prev+1)%images.length);
    }, [images.length]);

    //이전 이미지 보기(배열 처음이면 끝으로)
    const showPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev+1)%images.length);
    }, [images.length]);

    //키보드 이벤트 처리
    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === 'ArrowRight') {
                showNext();
            } else if(e.key === 'ArrowLeft') {
                showPrev();
            } else if(e.key === 'Escape') {
                onClose();
            }
        };

        //컴포넌트가 사라질 때 이벤트 리스터를 제거
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showNext, showPrev, onClose]);

    //현재 보여줄 이미지 정보
    const currentImage = images[currentIndex];

    return (
        // 1. 딤 처리된 배경(오버레이). 클릭하면 모달이 닫힌다.
        <div className='modal-overlay' onClick={onClose}>
            {/*
              2. 실제 모달 콘텐츠 영역.
                 이 영역을 클릭했을 때 배경의 onClick(onClose)이 실행되는 것을 막기 위해
                 e.stopPropagation()을 사용
            */}
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='modal_state'>
                    <img src={green}/>
                    <img src={red} onClick={onClose}/>
                </div>

                <img src={currentImage.src} className='carousel-image'/>

                <div>
                    <button className="carousel-button prev" onClick={showPrev}>❮</button>
                    <button className="carousel-button next" onClick={showNext}>❯</button>
                </div>

                {/* 페이지네이션 (예: 2 / 3) */}
                <div className="carousel-pagination">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
}

export default ImageModal;