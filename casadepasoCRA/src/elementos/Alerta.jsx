import React from 'react';

const Alerta = ({value,type}) => {
  return (
		<div className={`
			fixed top-4 left-1/2 py-2 -translate-x-1/2 px-8 rounded-lg  font-primaria border-[2px] 
			${type === 'error' ? 
			'bg-[#ffa5b1] border-[#913844]' 
			: 
			'bg-[#abffb9] border-[#389c38]'
			}
		`}
		>
			<p 
				className={`font-[400] 
					${type === 'error' ? 
						'text-[#8b2e2e]' 
						: 
						'text-[#1c5842]'
					}`
				}
			>
					{value}
				</p>
		</div>
	);
}
 
export default Alerta;