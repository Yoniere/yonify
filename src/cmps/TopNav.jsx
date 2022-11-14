import React from 'react'


export const TopNav=()=> {
  return (
    <section className='top-nav flex grid-item-2'>
        <div className='arrows-btns flex'>
            <button className='back-arrow'>
            <svg role="img" className="Svg-ytk21e-0 dUrrjJ IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
            </button>
            <button className='fwd-arrow'>
            <svg role="img" className="Svg-ytk21e-0 dUrrjJ IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
            </button>
        </div>

        <div className='authorization-btns flex'>
            <button className='signup-btn'>Sign up</button>
            <button className='login-btn'>Log in</button>
        </div>
    </section>
  )
}
