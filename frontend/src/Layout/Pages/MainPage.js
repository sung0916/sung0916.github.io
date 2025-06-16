import './MainPage.css';
import ImageModal from '../../API/Modal/ImageModal';
import { useState } from 'react';

//DB연동 전 이미지 더미데이터
const imageList = [
    {no:1, src:'/Images/junior_dev.jpg'},
    {no:2, src:'/Images/3.jpg'},
    {no:3, src:'/Images/4.jpg'},
    {no:4, src:'/Images/5.jpg'},
    {no:5, src:'/Images/7.jpg'}
];

function MainPage() {
    //모달창 열림 여부 관리(기본값 false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    //클릭한 이미지의 인덱스
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    //모달 여는 함수
    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    //모달 닫는 함수
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
    } ;

    return (
        <div className='page-container'>
            <div id='mp_imgs'>
                {imageList.map((image, index) => (
                    <img key={image.no}
                         src={image.src}
                         onClick={() => openModal(index)}
                    />
                ))}
            </div>
            
            {isModalOpen && (
                <ImageModal
                    images={imageList}
                    initialIndex={selectedImageIndex}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default MainPage;