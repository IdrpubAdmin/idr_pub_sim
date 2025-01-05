import Image from "next/image"

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {
        상품.map((v, i) => {
          return (
            <div className="food" key={i}>
              {/* 이미지 최적화 */}
              {/* Image사용시 외부이미지는 width, height 속성 필요함, next.config.js 세팅도 필요함 */}
              {/* <Image src={작명} className="food-img" /> */}
              <img src={`/food${i}.png`} className="food-img" />
              <h4>{상품[i]} $40</h4>
            </div>
          )
        })
      }
    </div>
  )
} 