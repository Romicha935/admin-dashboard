

const Customer = () => {
  return (
    <div>
          {/* Customer Acquisition vs Churn */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Customer Acquisition vs Churn
          </h3>
          <div className="flex items-end justify-center gap-4 h-48 mb-4">
            {/* Churn Box */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-200 rounded-2xl mb-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-300/50" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.5) 10px, rgba(255,255,255,.5) 20px)'
                }}></div>
              </div>
              <p className="text-sm font-medium text-gray-900">Churn</p>
            </div>
            
            {/* Acquisition Box */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-32 bg-blue-300 rounded-2xl mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Acquisition</p>
            </div>
          </div>
          
          {/* Legend */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-3 h-3 bg-blue-200 rounded"></div>
              <span>50% Churn</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-3 h-3 bg-blue-300 rounded"></div>
              <span>90% Acquisition</span>
            </div>
          </div>
          
          <div className="mt-4 text-right">
            <p className="text-2xl font-bold text-gray-900">90%</p>
            <p className="text-xs text-gray-500">50%</p>
          </div>
        </div>
    </div>
  )
}

export default Customer