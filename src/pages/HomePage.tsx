import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="h-screen bg-gray-50">
      <div className="relative top-1/2 -translate-y-1/2">
        <div className="relative bg-gray-50">
          <main className="lg:relative">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl flex flex-col gap-4">
                  <p>점심 뭐먹지?</p>
                  <p className="text-indigo-600">우리같이 고민해봐요!</p>
                </div>
                <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Team WednesDay Bagel은 직장인들의 메뉴 선택 기준과 음식 취향을
                  미리 알 수 있게 해서 고민 쉽게 해결, 음식 메뉴를 빠르게
                  결정하여 기존에 발생하던 스트레스를 줄여 최다 인원의 만족을
                  이끌어냅니다
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/questions"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      시작하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
