// main 경로 설정코드 // import App from './components/과제/Day25/App.jsx';

function App() {
  const textMenu = ["Gmail", "Images"];
  const iconMenu = ["🔬", "⋮⋮⋮", "👤"];
  
  const shortcuts = [
    { name: "오즈코딩스쿨", icon: "02" },
    { name: "catalyst", icon: "🔵" },
    { name: "tailwindcss", icon: "💨" },
    { name: "chatGPT", icon: "⚙️" },
    { name: "claude", icon: "🌟" },
    { name: "shadcn", icon: "⚫" },
    { name: "밍랩", icon: "📧" },
    { name: "코딩 교육", icon: "🐙" },
    { name: "gemini", icon: "✨" },
    { name: "컬러 색상 고침", icon: "🎨" }
  ];

  return(
    <div className="w-full h-screen flex flex-col bg-white">
      <header className="w-full flex items-center justify-end p-4 gap-4">
        {/* 텍스트 메뉴 */}
        <div className="flex gap-4">
          {textMenu.map((item) => {
            return <nav key={item} className="text-sm hover:underline cursor-pointer">{item}</nav>;
          })}
        </div>
        
        {/* 아이콘 메뉴 */}
        <div className="flex gap-2 items-center">
          {iconMenu.map((icon, index) => {
            return (
              <a key={index} href="" className="text-xl hover:bg-gray-100 p-2 rounded-full">
                {icon}
              </a>
            );
          })}
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center pt-32">
        {/* 구글 로고 */}
        <div className="mb-8">
          <a href="https://www.google.com">
            <img src="/google-logo.png" alt="google-logo" className="w-[272px] cursor-pointer" />
          </a>
        </div>

        {/* 검색창 */}
        <div className="flex items-center border border-gray-300 rounded-full w-[584px] h-[46px] px-4 hover:shadow-md transition mb-8">
          <span className="text-gray-400 mr-3">🔍</span>
          <input 
            type="text" 
            placeholder="" 
            className="w-full outline-none"
          />
          <div className="flex gap-3">
            <span className="cursor-pointer text-blue-500">🎤</span>
            <span className="cursor-pointer">📷</span>
          </div>
        </div>

        {/* 바로가기 아이콘들 */}
        <div className="flex gap-6 mt-4">
          {shortcuts.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2 text-xl">
                  {item.icon}
                </div>
                <span className="text-xs text-gray-700">{item.name}</span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;