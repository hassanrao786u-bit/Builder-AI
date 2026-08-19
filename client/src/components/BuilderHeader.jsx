import { ArrowLeftIcon, Code2Icon, DownloadIcon, ExternalLinkIcon, EyeIcon, GlobeIcon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'

const HeaderButton = ({ onClick, disabled, active, children }) => {
  const [hover, setHover] = useState(false);

  const bg = active || hover ? '#f4f4f5' : '#ffffff';
  const color = active || hover ? '#18181b' : '#52525b';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: bg, color: color }}
      className='inline-flex items-center justify-center gap-1.5 py-1.5 px-3 border border-zinc-200 text-xs font-medium rounded-lg cursor-pointer transition-colors'
    >
      {children}
    </button>
  );
};

const BuilderHeader = ({
    projectName,
    version,
    showCode,
    publishing,
    onToggleShowCode,
    onOpenPreview,
    onPublish,
    onDownload,
    onBack,
    onLogout,
}) => {
  return (
    <header className='h-12 shrink-0 flex items-center justify-between px-3 border-b border-zinc-200 bg-white'>

        <div className='flex items-center gap-2'>
            <HeaderButton onClick={onBack}>
                <ArrowLeftIcon size={16}/>
            </HeaderButton>

            <img src="/logo.svg" alt="" className='invert size-5' />

            <span className='text-sm font-semibold truncate max-w-38 md:max-w-50'>{projectName}</span>
            <span className='text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-500 font-medium'>v{version}</span>
        </div>

        <div className='flex items-center gap-1.5'>
            <HeaderButton onClick={onToggleShowCode} active={showCode}>
                {showCode ? (
                    <><EyeIcon size={13}/> Preview</>
                ) : (
                    <><Code2Icon size={13}/> Code</>
                )}
            </HeaderButton>

            <HeaderButton onClick={onOpenPreview}>
                <ExternalLinkIcon size={13}/>Open Preview
            </HeaderButton>

            <HeaderButton onClick={onPublish} disabled={publishing}>
                {publishing ? <Loader2Icon size={13} className='animate-spin'/> : <GlobeIcon size={13}/>} Publish
            </HeaderButton>

            <HeaderButton onClick={onDownload}>
                <DownloadIcon size={13}/>Export
            </HeaderButton>

            <HeaderButton onClick={onLogout}>
                Sign out
            </HeaderButton>
        </div>

    </header>
  )
}

export default BuilderHeader