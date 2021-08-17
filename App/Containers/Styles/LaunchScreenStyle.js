import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex items-center justify-center bg-white p-5',
  appLogo: 'w-70 h-70',
  title: 'font-medium text-2xl text-black text-center mt-1',
  desc: 'text-base text-white text-center mb-5',
  btnExplore: 'bg-primary rounded-md py-2 px-3 items-center mt-5',
  btnExploreLabel: 'text-xl text-white font-bold text-center'
})