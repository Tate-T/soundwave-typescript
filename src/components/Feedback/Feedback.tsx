import { useState } from 'react';
import css from './Feedback.module.css';
import { postFeedback } from '../../redux/feedback/feedbackAPI';
import { useDispatch } from 'react-redux';
import { ToastContainer, Bounce } from 'react-toastify';
import type { AppDispatch } from '../../redux/store';

type FeedbackSchema = {
  id?: number;
  name: string;
  rating: number;
  descr: string;
}

const Feedback = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [rating,setRating] = useState<number>(0);
  const addRating = (e: React.MouseEvent<HTMLElement>): void => {
    const el = e.target as HTMLElement;
    const ratingN: number = Number(el.closest('button')?.dataset?.rating);
    setRating(ratingN);
  }
  const postRev = async (_: FeedbackSchema) => {
    await dispatch(postFeedback(_));
  };
  const sendReview = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    const nameInput = document.querySelector("input[placeholder='Name']") as HTMLInputElement | null;
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement | null;
    postRev({
      'name': nameInput?.value || '',
      'descr': textarea?.value || '',
      'rating': rating,
    });
    setRating(0);
    if (nameInput) {
      nameInput.value = '';
    }
    if (textarea) {
      textarea.value = '';
    }
  }
  return (<section className={css.feedback} id='form'>
    <div className={css.part1}>
      <img src="https://i.ibb.co/60ck3LDy/image-2.png" alt='img' className={css.banner} />
    </div>
    <div className={css.part2}>
      <h3 className={css.subtitle}>Leave your feedback</h3>
      <p className={css.desc}>Share your impressions of our music service. Your feedback helps us become better and inspires further creative achievements.</p>
      <form className={css.feedbackForm}>
        <div className={css.ratingCont}>
          <span className={css.placehold}>Rating: </span>
          <div className={css.ratingButs}>
            <button type="button" className={css.ratingBut} data-rating="1" id="rating" onClick={addRating}>
              <svg width="21.788086" height="20.770752" viewBox="0 0 21.7881 20.7708" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <defs/>
	              <path id="Star 2" d="M10.45 0.26L7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26Z" fill={rating*2>=1 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
	              <path id="Star 2" d="M7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26L7.34 6.16ZM8.4 6.72C8.15 7.18 7.7 7.51 7.18 7.6L1.92 8.51L5.64 12.34C6.01 12.72 6.18 13.24 6.11 13.77L5.35 19.05L10.14 16.7C10.61 16.46 11.17 16.46 11.64 16.7L16.43 19.05L15.67 13.77C15.6 13.24 15.77 12.72 16.13 12.34L19.86 8.51L14.59 7.6C14.08 7.51 13.63 7.18 13.38 6.72L10.89 2L8.4 6.72Z" fill={rating*2>=2 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={css.ratingBut} data-rating="2" id="rating" onClick={addRating}>  
              <svg width="21.788086" height="20.770752" viewBox="0 0 21.7881 20.7708" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <defs/>
	              <path id="Star 2" d="M10.45 0.26L7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26Z" fill={rating*2>=3 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
	              <path id="Star 2" d="M7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26L7.34 6.16ZM8.4 6.72C8.15 7.18 7.7 7.51 7.18 7.6L1.92 8.51L5.64 12.34C6.01 12.72 6.18 13.24 6.11 13.77L5.35 19.05L10.14 16.7C10.61 16.46 11.17 16.46 11.64 16.7L16.43 19.05L15.67 13.77C15.6 13.24 15.77 12.72 16.13 12.34L19.86 8.51L14.59 7.6C14.08 7.51 13.63 7.18 13.38 6.72L10.89 2L8.4 6.72Z" fill={rating*2>=4 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={css.ratingBut} data-rating="3" id="rating" onClick={addRating}>
              <svg width="21.788086" height="20.770752" viewBox="0 0 21.7881 20.7708" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <defs/>
	              <path id="Star 2" d="M10.45 0.26L7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26Z" fill={rating*2>=5 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
	              <path id="Star 2" d="M7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26L7.34 6.16ZM8.4 6.72C8.15 7.18 7.7 7.51 7.18 7.6L1.92 8.51L5.64 12.34C6.01 12.72 6.18 13.24 6.11 13.77L5.35 19.05L10.14 16.7C10.61 16.46 11.17 16.46 11.64 16.7L16.43 19.05L15.67 13.77C15.6 13.24 15.77 12.72 16.13 12.34L19.86 8.51L14.59 7.6C14.08 7.51 13.63 7.18 13.38 6.72L10.89 2L8.4 6.72Z" fill={rating*2>=6 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={css.ratingBut} data-rating="4" id="rating" onClick={addRating}>
              <svg width="21.788086" height="20.770752" viewBox="0 0 21.7881 20.7708" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <defs/>
	              <path id="Star 2" d="M10.45 0.26L7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26Z" fill={rating*2>=7 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
	              <path id="Star 2" d="M7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26L7.34 6.16ZM8.4 6.72C8.15 7.18 7.7 7.51 7.18 7.6L1.92 8.51L5.64 12.34C6.01 12.72 6.18 13.24 6.11 13.77L5.35 19.05L10.14 16.7C10.61 16.46 11.17 16.46 11.64 16.7L16.43 19.05L15.67 13.77C15.6 13.24 15.77 12.72 16.13 12.34L19.86 8.51L14.59 7.6C14.08 7.51 13.63 7.18 13.38 6.72L10.89 2L8.4 6.72Z" fill={rating*2>=8 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={css.ratingBut} data-rating="5" id="rating" onClick={addRating}>
              <svg width="21.788086" height="20.770752" viewBox="0 0 21.7881 20.7708" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <defs/>
	              <path id="Star 2" d="M10.45 0.26L7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26Z" fill={rating*2>=9 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
	              <path id="Star 2" d="M7.34 6.16C7.26 6.29 7.13 6.39 6.98 6.42L0.41 7.55C0.01 7.62 -0.14 8.11 0.14 8.39L4.78 13.18C4.89 13.29 4.94 13.44 4.92 13.6L3.97 20.19C3.91 20.59 4.33 20.89 4.69 20.71L10.67 17.77C10.81 17.7 10.97 17.7 11.11 17.77L17.09 20.71C17.45 20.89 17.86 20.59 17.81 20.19L16.86 13.6C16.84 13.44 16.89 13.29 17 13.18L21.64 8.39C21.92 8.11 21.76 7.62 21.37 7.55L14.8 6.42C14.65 6.39 14.51 6.29 14.44 6.16L11.33 0.26C11.14 -0.09 10.63 -0.09 10.45 0.26L7.34 6.16ZM8.4 6.72C8.15 7.18 7.7 7.51 7.18 7.6L1.92 8.51L5.64 12.34C6.01 12.72 6.18 13.24 6.11 13.77L5.35 19.05L10.14 16.7C10.61 16.46 11.17 16.46 11.64 16.7L16.43 19.05L15.67 13.77C15.6 13.24 15.77 12.72 16.13 12.34L19.86 8.51L14.59 7.6C14.08 7.51 13.63 7.18 13.38 6.72L10.89 2L8.4 6.72Z" fill={rating*2>=10 ? "rgb(254, 200, 75)" : "#515151"} fillOpacity="1.000000" fillRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
        <input required type="text" placeholder='Name' className={css.nameInput}/>
        <textarea required className={css.commentInput} placeholder='Comment'></textarea>
        <button type='submit' onClick={sendReview} className={css.sendBut}>Send</button>
      </form>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  </section>);
};

export default Feedback;
