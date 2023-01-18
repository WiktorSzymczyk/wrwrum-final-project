// import d2021 from '../../Datas/2021/driverStandings.json';
import d2022 from '../../Datas/2022/driverStandings.json';
// import d2023 from '../../Datas/2023/driverStandings.json';
// import t2021 from '../../Datas/2021/teamStandings.json';
import t2022 from '../../Datas/2022/teamStandings.json';
// import t2023 from '../../Datas/2023/teamStandings.json';
import { Link } from 'react-router-dom';

export default function Standings(props: { team: boolean }) {
	return (
		<div className='flex justify-center items-center'>
			{props.team ? (
				<h1 className='h-screen mx-5'>
					<table className='table-auto border-2 border-t-4 border-[#00ff5e]'>
						<tbody>
							<tr>
								<tr className='border-b-2 border-[#00ff5e]'>
									<th className='p-2'>Position</th>
									<th className='p-2'>Team</th>
									<th className='p-2'>Points</th>
								</tr>
								{t2022.standings.map((res) => (
									<tr className='border-b-2 border-[#00ff5e]'>
										<td className='p-2'>{res.position}</td>
										<td className='p-2'>
											<Link to={`/constructors/${res.car}/${res.id + 1}`}>
												{res.car}
											</Link>
										</td>
										<td className='p-2'>{res.pts}</td>
									</tr>
								))}
							</tr>
						</tbody>
					</table>
				</h1>
			) : (
				<h1>
					<table className='mx-10 table-auto bg-[#262626] border-2 border-t-4 border-[#00ff5e] mb-10'>
						<tbody>
							<tr>
								<tr className='border-b-2 border-[#00ff5e]'>
									<th className='p-2'>Position</th>
									<th className='p-2'>Driver</th>
									<th className='p-2'>Nationality</th>
									<th className='p-2'>Points</th>
								</tr>
								{d2022.standings.map((res) => (
									<tr className='border-b-2 border-[#00ff5e]'>
										<td className='p-2'>{res.position}</td>
										<td className='p-2'>
											<Link to={`/drivers/2022/${res.link}`}>{res.name}</Link>
										</td>
										<td className='p-2'>{res.nationality}</td>
										<td className='p-2'>{res.points}</td>
									</tr>
								))}
							</tr>
						</tbody>
					</table>
				</h1>
			)}
		</div>
	);
}
