import React from 'react'

const Footer: React.FC<{}> = (): React.JSX.Element => (
  <footer>
    <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
      <h3>
        Built with ❤️ by{' '}
        <a href="https://github.com/bkataru" target="_blank">
          bkataru
        </a>
      </h3>
    </div>
  </footer>
)

export default Footer
