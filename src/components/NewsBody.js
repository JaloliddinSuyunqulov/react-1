import React, {Component} from 'react';

class NewsBody extends Component {
    render() {
        return (
            <div className='news-body d-flex flex-column bg-white'>
                <div className='border-bottom pb-4'>
                    <div className='d-flex'>
                        <div className='news-body-title'>Jamiyat haqida</div>
                        <div className="d-flex align-items-center icon-info ml-5">
                            <div className='mx-3'><span className="icon icon-date mr-2"/>16:48 / 12.11.20</div>
                            <div className='mx-4'><span className="icon icon-eye mr-2"/>321</div>
                            <div className='mx-3'><span className="icon icon-chat mr-2"/>100</div>
                        </div>
                    </div>
                    <h2 className='mt-4'>Eksport qiluvchi tadbirkorlik subyektlariga!!!</h2>
                    <p>
                        “O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari tomonidan istisno tariqasida
                        maxalliy tadbirkorlik sub'ektlariga eksport qilish sharti bilan birja savdolari orqali bug’doy
                        sotilmoqda.
                        Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat solig’isiz 1
                        610 000 so‘mdan, qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.
                        Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                        natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi
                        tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.
                    </p>
                </div>
                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4>Mavzuga izohlar</h4>
                        <h5>2 ta fikr</h5>
                    </div>
                    <div className='d-flex align-items-center mt-3'>
                        <div><img src="images/Rectangle 64.png" alt="Error" className='w-100'/></div>
                        <textarea className='form-control h-100' placeholder='Izoh qoldirishingiz mumkin'/>
                    </div>
                    <div className='d-flex mt-4'>
                        <div><img src="images/Rectangle 66.png" alt="Error" className='w-100'/></div>
                        <div className='ml-4 w-100'>
                            <h6>Nigina Karimova</h6>
                            <div>Tushunmovchilik bo'yicha qayerga murojaat qilsam bo'ladi?</div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <div><img src="images/Heart.png" alt="Error"/></div>
                                    <div className='ml-4'>Javob qaytarish</div>
                                </div>
                                <div>15 daq avval</div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                        <div><img src="images/Rectangle 67.png" alt="Error" className='w-100'/></div>
                        <div className='ml-4 w-100'>
                            <h6>Sanjar Kenjayev</h6>
                            <div>Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                                natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha batafsil
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <div><img src="images/Heart2.png" alt="Error"/></div>
                                    <div className='ml-4'>Javob qaytarish</div>
                                </div>
                                <div>2 soat avval</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsBody;