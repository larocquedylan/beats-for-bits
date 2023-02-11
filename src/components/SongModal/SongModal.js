import './SongModal.scss'
// import test from '../../assets/photos/23.jpeg'

function SongModal({closeModal}){
    return (
        <>
        
        <div className='modal-background'> 
            <article className='modal'>
                {/* <img className='modal__img' src={props.img} alt='song artwork'></img> */}
                {/* <img className='modal__song-img' src={test} alt='song artwork'></img> */}
                <button onClick={() => closeModal(false)}> X</button>
                <div className='modal__song-title'> Test</div>
                <div className='modal__info'> 
                
                    <h2> You are being going to a Lightning Network Paywall.</h2>
                    <p> I am using this because I don't think I should need your email, phone number or bank information for you to listen to my offerings.  </p>
                    <a href="https://www.youtube.com/watch?v=XRxbrfbeThg&ab_channel=KevinRooke"> Why lightning?</a>
                    <a className='modal__link' href='https://legend.lnbits.com/paywall/P6AYQ7iGaFE8AgjRkzfekn'>Pay Now! </a>
                </div>
                
            </article>
        </div>
        </>
    );
};

export default SongModal;