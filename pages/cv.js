import Image from 'next/image'
export default function CV() {
    return (
        <div className='container'>
            <div className='box'>
                <Image src="/mc.jpg" alt="heh" width={250} height={300} />
                <h1>Батцэнгэл Энхмандал</h1>
                <h5>Мэргэжил: Програм хангамж</h5>
                <h5>SISI ID: 20B1NUM1582</h5>
                <h5>Утасны дугаар: 88469991</h5>
                <h5>Mail: mandalgej@gmail.com</h5>
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100009141991312"><Image src="/Facebook_icon_2013.svg.png" width={50} height={50}/></a></li>
                    <li><a href="https://www.instagram.com/benkhmandal/"><Image src="/ig.png" width={50} height={50}/></a></li>
                    <li><a href="https://twitter.com/?lang=en"><Image src="/tw.png" width="50" height="50"/></a></li>
                </ul>
            </div>
            <div className='box2'>
                <div className='hha'>
                    <div className='edu a'>
                        <h3 className='gar'>Намтар</h3>
                        Миний бие Б. Энхмандал нь 2002 онд Улаанбаатар хотод төрж, Орхон аймагт өсөж хүмүүжсэн ба 
                        аав ээж дүүгийн хамт амьдардаг.Орхон аймгийн БУГС-тай 14-р дунд сургуулийг 2020 онд 
                        төгссөн ба одоогоор Монгол улсын их сургуульд програм хангамж мэргэжлийн 2-р түвшн суралцаж байна.
                    </div>
                    <div className='hobby a'>
                        <h3 className='gar'>Хобби</h3>
                        <ul>
                            <li>Чөлөөт цагаараа сагс тоглох дуртай ба 1-р зэрэгтэй.</li>
                            <li>Волейбол болон ширээний теннисээр хичээлэлж байгаа.</li>
                            <li>2017 оноос хөзрийн илбээр хичээллэж хөзөр цуглуулах хоббитой болсон.</li>
                            <li>Гитар тоглох дуртай ба хичээллээд 3 жил болж байна.</li>
                            <li>Хар зураг зурах сонирхолтой</li>
                        </ul>
                    </div>
                </div>
                <div className='hhe'>
                    <div className='soft a'>
                        <h3 className='gar'>Soft skill</h3>
                        <ul>
                            <li>Багаар ажиллах чадвартай</li>
                            <li>Ярилцах бусадтай ойлголцох чадвартай</li>
                            <li>Цагийн менежмэнт</li>
                        </ul>
                    </div>
                    <div className='hard a'>
                        <h3 className='gar'>Hard skill</h3>
                        <ul>
                            <li>C, С++, javascript-үүд дээр ажиллана</li>
                            <li>MS powerpint, exel зэрэгүүдийг хэрэглэж чадна.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
