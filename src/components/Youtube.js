import "./Youtube.css";
function Youtube() {
  return (
    <>
      <div className="youtube_body">
        {/* 휴대폰상태바 */}
        <div className="yt__phone_top">
          <div>
            <span>5:10</span>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={20}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </span>
            <span className="phone_top_LTE">LTE</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* 유투브상단바 */}
        <div className="yt__topbar">
          <div>
            <span>Youtube</span>
          </div>
          <div className="yt__topbar_right">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <span className="yt__topbar_right_user">승준</span>
          </div>
        </div>
        {/* 탐색바 전체바 */}
        <div className="yt__topbar_explorebar">
          <div className="yt__topbar_explorebar_left">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </span>
            <span>탐색</span>
          </div>
          <div className="yt__topbar_explorebar_right">
            <span>전체</span>
            <span>새로운 맞춤 동영상</span>
            <span>실시간</span>
            <span>음악</span>
          </div>
        </div>
        {/* 영상나오는 곳 */}
        <div className="yt__topbar_playvideo">
          <div className="yt__topbar_playvideo_img">
            <img src="data:image/jpeg;base64,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"></img>
          </div>
          <div className="yt__topbar_playvideo_title">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                />
              </svg>
            </div>
            <div className="yt__topbar_playvideo_title_text">
              <span>
                평범할 수 없는 시대를 평범하게 살고 싶던 사람들
                [한극영화/결말포함]
              </span>
              <div>영화탐구 생활 조회수38만회 6일전</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* 쇼츠부분 */}
        <div className="yt__topbar_shorts">
          <div className="yt__topbar_shorts_home">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </span>
            <span>Shorts</span>
          </div>
          <div>
            <div className="yt__topbar_shorts_fg">
              <img src="data:image/jpeg;base64,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"></img>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  width={28}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>
              <div>
                <span>[100분 동물] 사막 이제는 "김이 나오지않아"</span>
                <span>조회수 11만회</span>
              </div>
            </div>
          </div>
        </div>
        {/* 바텀내비게이션 */}
        <div bottom_navi>
          <div>
            <span>
              <img src></img>
            </span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Youtube;
