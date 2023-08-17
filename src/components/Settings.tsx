interface SettingsProps {
  refInner: React.RefObject<HTMLDialogElement>
}

export default function Settings(props: SettingsProps) {
  const { refInner } = props

  return (
    <dialog ref={refInner} className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h2 className="font-bold text-xl md:text-3xl">Settings ⚙️</h2>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  )
}
