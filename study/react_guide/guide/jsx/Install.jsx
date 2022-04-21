import React from 'react';

const Install = () => {
    return (
        <>
            <section className='install'>
                <h3>리액트 설치</h3>
                <article>
                    <h4>CDN링크</h4>
                    <img src="../images/img001.png" alt="스크립트코드" />
                    <ul>
                        <li>위의 스크립트 코드를 입력합니다.</li>
                        <li>CDN을 통해 React를 사용한다면, crossorigin 어트리뷰트(attribute)와 함께 사용하는 것을 권장합니다.</li>

                    </ul>
                </article>
            </section>
        </>
    )
}

export default Install;