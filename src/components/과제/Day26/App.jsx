import { MessageCircle, Bell, User, Twitter, Facebook, Instagram } from "lucide-react";

function App() {
  const textMenu = ["Explore", "Find Talent", "Get Hired", "Blog"];
  const Menu = [
    "For designers",
    "Hire talent",
    "Inspiration",
    "Advertising",
    "Blog",
    "About",
    "Careers",
    "Support",
  ];

 
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between">
      {/* 헤더 */}
      <header className="w-full border-b border-gray-50 mt-2">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-12">
            <a href="https://dribbble.com/" className="text-2xl font-bold tracking-tight">
              Dribbble
            </a>
            <nav className="flex items-center gap-8">
              {textMenu.map((item) => (
                <div
                  key={item}
                  className="text-[15px] font-medium text-gray-700 cursor-pointer hover:text-pink-500 transition"
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-90 transition">
              Upgrade to Pro
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
              + Share Work
            </button>
            <div className="flex items-center gap-4 ml-2">
              <MessageCircle className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" />
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" />
            </div>
          </div>
        </div>
      </header>

      {/* 메인 */}
      <main className="max-w-[1440px] mx-auto px-10 py-16 flex flex-wrap items-center gap-10">
        {/* 왼쪽 영역 */}
        <div className="flex-1 min-w-[320px]">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Discover the <br />
            World&apos;s Top Designers
          </h1>
          <p className="text-gray-600 mb-8">
            Explore work from the most talented and accomplished <br />
            designers ready to take on your next project.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="What type of design are you interested in?"
                className="flex-1 px-4 py-3 outline-none text-sm"
              />
              <button className="bg-pink-500 text-white px-6 py-3 text-sm font-medium hover:bg-pink-600 transition">
                Search
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Popular:
              <button className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition">
                UI Design
              </button>
              <button className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition">
                Illustration
              </button>
              <button className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition">
                Branding
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="flex-1 min-w-[320px] flex justify-center items-center">
          <img
            src="https://cdn.dribbble.com/assets/art-banners/ai-generated-dribbble-badge-800w-91d8a6d957db76a1a6db9de46be98d24b53dcf43f4a5e8562ffb5c9ed9f89377.webp"
            alt="banner"
            className="rounded-2xl shadow-lg max-w-[500px] w-full"
          />
        </div>

        {/* 메인 콘텐츠 아래 이미지 그리드 영역 */}
        <section className="w-full mt-20">
          <div className="flex flex-wrap justify-center gap-8">
            {boxes.map((num) => (
              <div
                key={num}
                className="w-[250px] h-[200px] bg-white rounded-2xl flex flex-col justify-between p-4 hover:shadow-md transition"
              >
                {/* 이미지 영역 */}
                <div className="flex-1 bg-gray-300 rounded-xl"></div>
                {/* 이름표 라벨 */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-24 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="w-full border-t border-gray-200 bg-white py-6">
        <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
          <a href="https://dribbble.com/" className="text-2xl font-bold tracking-tight">
            Dribbble
          </a>
          <nav className="flex flex-wrap items-center gap-6">
            {Menu.map((item) => (
              <div
                key={item}
                className="text-[14px] font-medium text-gray-700 cursor-pointer hover:text-pink-500 transition"
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-sky-500 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
