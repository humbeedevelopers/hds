Built with **Next.js**, **Tailwind CSS**, and **Lucide Icons**.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/humbeedevelopers/hdsnewwebisite.git
cd my-app
npm install
















{/* Navigation Tabs */}
<div className="flex gap-6 md:gap-8 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap border-b border-transparent">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      /* Adjusted: text-2xl on mobile, text-4xl on desktop. Added flex-shrink-0 */
      className="relative text-2xl md:text-4xl font-instrument pb-4 outline-none flex-shrink-0"
    >
      <span className={`transition-colors duration-300 ${
        activeTab === tab ? 'text-text-main' : 'text-bg-soft hover:text-text-main cursor-pointer'
      }`}>
        {tab}
      </span>
      
      {/* Optional: Visual indicator for active tab on mobile since hover isn't as reliable */}
      {activeTab === tab && (
        <motion.div 
          layoutId="activeTabUnderline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-text-main md:hidden"
        />
      )}
    </button>
  ))}
</div>








{/* Navigation Tabs */}
      <div className="flex gap-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative text-4xl font-instrument pb-4 outline-none"
          >
            <span className={`transition-colors duration-300 ${
              activeTab === tab ? 'text-text-main' : 'text-bg-soft hover:text-text-main cursor-pointer'
            }`}>
              {tab}
            </span>
          </button>
        ))}
      </div># hds
# hds
# hds
# hds
