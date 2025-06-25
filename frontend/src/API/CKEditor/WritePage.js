/*(선택 사항) 한국어 UI 적용 시 (먼저 패키지 설치 필요: 
npm install --save @ckeditor/ckeditor5-dev-utils @ckeditor/ckeditor5-theme-lark @ckeditor/ckeditor5-build-classic # ... 등 필요에 따라)
그리고 CKEditor 온라인 빌더를 통해 한국어 포함된 커스텀 빌드 생성 필요
예시: import '@ckeditor/ckeditor5-build-classic/build/translations/ko';*/

// CKEditor 5 관련 모듈 import
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// 에디터 설정을 위한 객체 (선택 사항)
const editorConfiguration = {
    // placeholder: '여기에 내용을 입력하세요...',
    // toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ],
    // language: 'ko', // 한국어 적용 시 (커스텀 빌드 및 언어팩 설정 필요)
    // 더 많은 설정 옵션: https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
};

function WritePage({initialData = "", onChange, onReady, onBlur, onFocus}) {

    return (
        <CKEditor
            editor={ClassicEditor}
            config={editorConfiguration} // 설정 객체 전달
            data={initialData} // 초기 데이터 설정
            onReady={editor => {
                // 에디터가 준비되었을 때 실행됩니다.
                // 에디터 인스턴스에 접근해야 할 경우 여기서 처리할 수 있습니다.
                console.log('CKEditor5 React Component is ready to use!', editor);
                if (onReady) {
                    onReady(editor);
                }
            }}
            onChange={(event, editor) => {
                // 내용이 변경될 때마다 실행됩니다.
                const data = editor.getData(); // HTML 형식의 데이터
                // console.log({ event, editor, data });
                if (onChange) {
                    onChange(data);
                }
            }}
            onBlur={(event, editor) => {
                // 에디터가 포커스를 잃었을 때 실행됩니다.
                // console.log('Blur.', editor);
                if (onBlur) {
                    onBlur(event, editor);
                }
            }}
            onFocus={(event, editor) => {
                // 에디터가 포커스를 얻었을 때 실행됩니다.
                // console.log('Focus.', editor);
                if (onFocus) {
                    onFocus(event, editor);
                }
            }}
        />
    );
}

export default WritePage;