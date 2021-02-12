import React, {Component} from 'react';

class NewsBody extends Component {
    render() {
        return (
            <div className='news-body d-flex flex-column bg-white'>
                <div className='border-bottom pb-4'>
                    <div className='d-flex'>
                        <div className='news-body-title'>{this.props.item.menuNameUz}</div>
                        <div className="d-flex align-items-center icon-info ml-5">
                            <div className='mx-3'><span className="icon icon-date mr-2"/>{this.props.item.createdAt}</div>
                            <div className='mx-4'><span className="icon icon-eye mr-2"/>{this.props.item.viewCount}</div>
                            <div className='mx-3'><span className="icon icon-chat mr-2"/>100</div>
                        </div>
                    </div>
                    <h2 className='mt-4'>{this.props.item.titleUz}</h2>
                    <p>
                        {this.props.item.descriptionUz}
                    </p>
                </div>
                <div className='mt-5'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4>Mavzuga izohlar</h4>
                        <h5>2 ta fikr</h5>
                    </div>
                    <div className='d-flex align-items-center mt-3'>
                        <div><img src="/images/Rectangle 64.png" alt="Error" className='w-100'/></div>
                        <textarea className='form-control h-100' placeholder='Izoh qoldirishingiz mumkin'/>
                    </div>
                    <div className='d-flex mt-4'>
                        <div><img src="/images/Rectangle 66.png" alt="Error" className='w-100'/></div>
                        <div className='ml-4 w-100'>
                            <h6>Nigina Karimova</h6>
                            <div>Tushunmovchilik bo'yicha qayerga murojaat qilsam bo'ladi?</div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <div><img src="/images/Heart.png" alt="Error"/></div>
                                    <div className='ml-4'>Javob qaytarish</div>
                                </div>
                                <div>15 daq avval</div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                        <div><img src="/images/Rectangle 67.png" alt="Error" className='w-100'/></div>
                        <div className='ml-4 w-100'>
                            <h6>Sanjar Kenjayev</h6>
                            <div>Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash
                                natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha batafsil
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <div><img src="/images/Heart2.png" alt="Error"/></div>
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