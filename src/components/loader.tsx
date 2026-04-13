const Loader = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
			<div className="flex flex-col items-center gap-4">
				<div className="w-12 h-12 border-4 border-white/30 border-t-orange-500 rounded-full animate-spin"></div>
				<p className="text-white text-lg">Loading...</p>
			</div>
		</div>
	)
}

export default Loader
