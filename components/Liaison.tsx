const systems = ['MOKA', 'QRIS', 'EDC', 'SAP', 'iReap']

export default function Liaison() {
  return (
    <div className="border border-[#00d4ff]/20 p-4 rounded-xl">

      <h2 className="text-[#00d4ff] mb-4">Connection Status</h2>

      {systems.map((sys) => (
        <div key={sys} className="flex justify-between text-sm mb-2">
          <span>{sys}</span>
          <span className="text-green-400">● Connected</span>
        </div>
      ))}

    </div>
  )
}
