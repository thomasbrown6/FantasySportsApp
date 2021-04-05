import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';

//Component
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Gameone from '../../assets/images/gameone.jpeg';
import Gametwo from '../../assets/images/gametwo.jpeg';
import Gamethree from '../../assets/images/gamethree.jpeg';

//Actions
import { getNCAALiveScores } from '../../actions/ncaa';

const LiveScore = ({
	auth: { user },
	ncaa: {
		loaded,
		divisions: { fbs, fcs, div3 }
	},
	getNCAALiveScores
}) => {
	useEffect(() => {
		getNCAALiveScores('all');
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			getNCAALiveScores('all');
		}, 30000);
		return () => clearInterval(interval);
	}, []);

	//Building fbs scores
	if (fbs && Array.isArray(fbs.category)) {
	}
	return (
		<Fragment>
			<div id='scores'>
				<h1 id='scorestext'>NFL Scores</h1>
				<br></br>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<Cardgroup
							game='Atlanta Falcons vs Carolina panthers'
							home='40'
							away='39'
							awaylogo='iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABnTSURBVHhe7d13vC1XVcDxF4Ig2IJdUcGIFLEmooiCEcUOCgoqKvaAFBULIiJGIyhKxC5Yo4IVLAR7FwXUCCIWYo9obGBXEiB5ru/l7vfZmaw5M2dOmX3enT9+n3fPvHNm9uxZs/faq+1Tp0+fXljYOunBhYVNSQ8uLGxKenBhYVNOXX/VlUe85oqnL0zjHsHDg1tVx3DX4I6dY1vFc8seagucaeSrHnrhwjS+Kjgd3O34822CLwj+JrgyuFXQ/c1W8Nyyh9oCi2CtzxsHtw2eFFwevDggWHcO/P/FwQ3Hx/DZQfccW2ERrLOHTwgIzfVBEZzCUwPfeWB1DE8IuufZCotgHR5vFDw9uH/w+sFbBOcGPxLUQlPzD8GTg1+ojuHzA+e8XfBmx39vhUWwDgsC9ODgX4NPDb4i+L3gMcE/BrXQjIGu9ZDghQGd632C7LprswjWYWFk+euAYP1RkE176/L3wf8e/01AXed+wUcGNz/+vDaLYB0W7xS8NOgKx7b4/uC9gxcFhPfdg6wdgyyC1Ta3DC48/tfnYj7YFUbA/zr+20LgYUG3TaNYBKttviZ4bfCnwa8EHx/8WdAViF0xedW4CFa7vGHw8qA85NcE9wl+qDq2az4zyNo2yCJYbXLH4FeDrnL+UwHlvT62S74xyNo3yCJY7fCmwSOCjwqMFITquiB74PvgfwJG16ytgyyC1Q7cK4TpacEDgp8JrM6yh74P/iB4qyBr6yCLYLUD57AHSmH/nOCLg387PrZv6HbXBB8RZG0dZBGsNmBRZ0XfhsFzG/xEYBrkMsraO8giWG1wfvC3QfaQ54B76NOCrK2jWASrDS4JilulFZ4bnBNk7R1kEaw2EDuVPdy5+JfgA4OsraNYBGs85wWfHkzWOxLYqx4Z/GRQB+DNDeX9DkHW5lEsgrUaLhRBcqzg7xv8Z2D1do/gYwKxUdnvxnJpkD3YufnNYLKpAYtgvQ4hvY8OHhd8VvAuwZsHLwh0NGv3fxz/XcMsYNTJzjkGBtHuOVuAySNr72iufdx9T1132cVTufkx9wkeHNwsyL43iX0J1pcEPxgYjUrH/kkgoO6/q2Ndvjv4sYBTWESnKITs/H28QfA9QXbuOTElf0iQtXlbfEZQIjYkeHT/X3Tss4PnBdcGYvUnLyS67FKwxDUZlehNfUbIxwa/2DlWYyoUJOdvrhcO4uxafTwqmNNlk/HvwXcG7GpZm7cBAaHDGe19fkZA5aBqfFIgMvb5wc8GHxx4Bj6/SdA91yR2JVj3DF4VXB0I6806eAy/FUir+sOAlTy7Vh/vGKwaDefid4O3CbI2r8vNAgLz+ODugWjU9wseFJgdHh7cPuhzqluZvmtAEAUcvnOQXWdtdiFYGvnMILuRKfx+IDDu+wI6msA4MeRGxOz6uHXQ4hQIMfAedtbuIUztZXrDewXl5fESUjmMiOVafx6serEJ1qcERs9vDX402MqKfNuC9faBhhqpshvZBJZqo6CgPDoBHeFjA6vJbju+MmhtCtR2/2qXKbrb5iHol78UfHV1TNbPtwf/HNDbpphT+CudU5aRaAtx+PV1J7EtwRKO4kGXFd6uMYJJsxKYR0eo2/J6gc7WUdlv94028gsynxgVLEI+OqjbPIR7+obA+XgPhPz8fGC6Y58TQ9a97lTE4RM0q/isLaPYhmC9dcAONYdzl/BkyQi3CDy87Df7hiBYccnKsRjptnUVXhoP+Ypgn/ri/wVfG9DRPijI2raSTQTr3QJTzm8Ec1m0jQbMEVn7PMzsN/tG3xCulwVvF2RtrTG1ixszJf1xkJ1zn9AJre6ztvYyVbA+MbA8zRqyb4yUcgG7bbRSyr4/F68MxqR6CaXxwhSdrAU48LO29jJFsAzPrSjGrw7+KnjPoNtOS3oPKPvdHJTaDn18WGDVKw4/+/2c/ECQtbmXdQWLnUM4bXbxObBcvldApyptLNZjS2iW+6uC7Lf7hHI9ZCPy8LLftoDIkKzNvYwRLMFo3iJulX8KsgvPhRGJ66K0lWWexVm2sZBfjt7arjMHTCOs3XWf1lwQsNX9ZZD9fm48+7WjMMYIlrc+u2ArcI+UtjI8ltXpK47/nRuCxfHOuFn3a4GRc67FzxhWvRS9rBIs1usvCthLsgu2gLbdJSht5tRmQM2+OyfsTX0O9FbMIn0weGftXskqweKDyi7UCn8RFL1F+A27y1wZN0OwaFullr7l45Pb6FipCNgqXxeUdo9mlWB5aHSU7GKtwHBoCe8laM2FU+AlsMhgdS99KyTZFJl9vzWeE6xdammVYEFnZBdriS8P+Mwo6xJQs+/MCae5CIK6yC33TouRFxnfEnAp1XIxSJ9gCXuxTG/9rfqOwDSozazaLa6sTHVeUMKknVxgnxzQrVrLGsoQ2i1U/D2CWkZWkgmWwDy2oUO46S8NSrutunZd22oqVqqqLGuniAyf7xSwsre8OKr5+qD09SBdwbL0Fb8jSoFVO7tAS3RLAPGz7SJkZxP4+xS4LYkTojjpXV4Kq+5fC7LftYTaYWuFUncFizE0O3GrfFlQ39BFgfii7LtzYSopyq/oTtGw2fdahcF57cjSrmC1OpVkSJfvzvtfGLTkvMX3BlxOHOUiHLLvtIRp2sspzoubaVLEa1ewWssWXoUpu5tzaOVFh5G63sKqy0Mqb7vYpuw7LcGQy5Mh3Y7Oqj8lXNC7634epBYsMTcC/bMLtgg3CDubVVZ9U5IKjLwtLD54AURecIgT+H1WCpyCmPdu9tDapgYQKjtUkdAWgsrWhT9QwGF9U6zZRqsW/G/PCljZld8W8pt9pyXkFbC51f05CYJ1J8QHSlp2sRZhX6MHKPDf9byLv2fZbuFFKSYGu1FkWd6t8dOB/qv7cxL1VHhIijsl2JC9KnPXcj777T6gW9l3x2hKD5SK5lj23VagpN83yPpybQjVuYgP3xRkF2wRcVj3DtKbOobzNPvtLqH8iq2SlVPsVlw6h2AT5MBXwXmj7JwCwXoHxAfJjdkFW0V0QHpTxyhdlP1ulwg/9mCEHJV2CDrMvtsiUtMmKetdCNZ5iA8thRwPwbpeP7wML0v2212iBkK3AIeo1kNxOLMD1m2fDME6B/GBIa/lSMaCbJcxlYa9LFwn7kuK2q5j3+U4XhbUmdlW2y8Jsu/PjWfd9VJsXFqpcKS4Iz7wuLcYfVlDB3j/oE6e6MMyn01LLQJCVmq8Z+fdFPkAspfqxcTbBr8dZN9vAa4lpaXqYxsV260hVLdHfLAqqC/SIjJ0pUmlNzOAEpRGO+cxNW2yEZO3nZ9SVRcO5izZgK4llin7/dz8TkAH/btAjSyuG/phCUHaGIJ1PuJDa1EBXVitZT3fNUhvZgArXx56Lgv13ukT2XUIb3Yc+kgNBfl/Q2UePSSrw+w8c6NulvZ9VyAWX12sVaabtSFYFyI+tJbaVbBUVwBEZMA2b172SdcMQE/6uKBEILDs1y9cN5piFUbIFm1X1B33mLV5axCshyE+lAsbHluyuzA02kdQFGN6ExOhg6nvIAqV0LJ7EQSOeAF4dDJvNWHm5pD/N0a3K3xekN3P3LAByh63oLGJetb2jSFYt0N8sHoSKuEBtiRYJQyGwzm9iS3Bk88FQ5BtCp59Zx1a1a8K9MQ6dW6rEKwj4oM3E97MFr3wW1sKDyAxQ2h29n/rYEVa6qe2hAgW7RJq3I1k2Bq1YEHoDKVW5bisUXNhBJ2Ukbslpii3vi/XMbufueBdEWa0M4EqdAVLbc+6IS0YTJlB1IXPSkJug1pg/N11aZQ4tQ89/jxWwJhwWswaUothTJ2ujchGLE5UCp6wkxYC/bfmZuhAMX9iINrUyOJNlqZloSCmq6RriaPXDsZEySYiFRg/u+frcudA+HRribSMtm8ZZG3eGl3BgtWSVZL6UuxGWeP2hQTUum3bRJ2H+lpdr4PFjO+xefls9PYdaoK8Sxk2QxWGJVH8cFCfdw6k+HM32URdLYY6eXYnZIJVM1cozUsDqd3ixLN2jcWQz8KcDf0s5tm1C3ZsENPVnc6sHPWLMJMxISYtCJaVNWMtWyVb3VQj82iGBMsOBnIM2T2yBm9CZtIQvmuotqJaR1kW9VjXPy+Y4ow0prYPCL45UPbQyndqfL+pjXVe/dXu9TJaSFDRB8wobHW8D1sJjVnFkGBB2LIhNGvwFFiyjSISN90wA6VCroyTDLVZG1Zh6uYDNG1T8Bk32aGU5KY/ZW3Yhp2Oa4hTnJVe4f7bBor413XYQddSY2xuK7w+r9u1U4YEi2Sr6FIaJ25705WOEGjnpn8QAnFTdBU6z5R4a6MbYRVPZhTaVwU/BlsF1fxtBLNzhhh8I6Oppl7FWigY/efKeWRlN0DU/bZThgTLaPC5AYOpKsl0Dq6KMWYINpOnBaaf4kCmQG5q7RXjxKb14YGHJ+8tu/6uEetFkOpjRi+7cyhb1N37x9ReAv78f/27XSGCgyFUm+q2jEXMfreMwSiGBKtGxCaFNruBLiy7u7KVmH7KdYxS4szra88JG5HYL4q9kd2mAXXbfTYyW3Xv0m1m9cpkRICNoHUbxsAnysxCP3RPnNbyI2Ubca4P6mjrCBYYUIWN9NV4N5KV0UzDsnOsiywXeovz2dFrkziqXSMK4zGB5b3PHPrZIsQxu1RYYW7bzkUVYCJh0KXHmnW61x9C9nZJB/QCEFL39qLASK3Of/a7M6wrWAWdRxktQiTdnRJu+GcnUQxtzN534pootmxCdABDb/0g6F6C6Rganb8erQ4BD0VfZfH5dMx6UUQY69h4pgH6Lb1sSPEnnPTfXw+8gN0ojK5wEziqhAWHZFrRGzwFZWVtMUWYutfQPrmHDwzq8xXOCPFUwXICuf3CLuy1MiVliL+qrmzsRijhohvVRfc2e0vqmztU+lZk+s8o7OWhe1qI6AfTaMlI5hEwausPmcrZ+TnoCU9XgExZPBe1nmTWMUUSREbg+jxWtfqcsl8fB32yO/qJiiHEjluUsZFZqEwWrE1w8xr0gIB7xPDavYmzAZ380EBcl5Vv1hdd9A0h60sWsbI0KskEV2dBJOgTguz8soWknkmYsNgpRlEuK+2jB4og7ba7D/dTn19ep5BmHhozi9HX6Ho0yOxLsIxqguo0QMF/b6Th3VtAD8lu5NDhPbCinqLjrMJKWAmBVf4+35F2Vswb9jM0G8gbZNv78YBgjS2roMAKdcUzZBWwuqdrmVksDij4Vv1Uo6Nt/nYpWKY6I5O3xbBLh2g5a2UXmOqPpoYd4UX1oJUm5yHxkJ8SmE5XLQoI1jozhUFgrGuK+ecW2xQsc625nM2E7mCo5grqKoEnCaPC1jbwPsZ0KfJCKNEvB0WAXMsIMmf5JtPukZ1ym4LFB+Xk8hPN/WOMqGcrkmNN85TtKQubDIq9VTEdzOpsVTbRXGjX0YpxXcGyHPVDhjOjkw2/fabAlWnOsCl2vs5uOWlYbYl530bsfIHTm97GL5ldswWMWGpqnLOuYFFGDbVWJY8NrAREJFDYLFWzi51EuLKE/NB/sn4cA9WiFMVl47Ma9OBaLpBnUXYU9jxWsMybnKwMlRRxhlDKHOXUHM8XeJJ1qS50yxKBOgVuIaMeUwI3ilUgHSq7VmswYTxyrGB1a02dZP1pDFZpQ/W7+hDdef+g+ECpFpz/33b8uXWYjy4dK1jrGNJOOl460Zos0XXozBh4M+xUUXskYAQ8lFKePxdcMFaw+JXOVkPmLrA6ooeqlJz1Zx8s7tn5Do0XDAmWmg5K2xxCJZpWEF1gMUMnHRtc5/uMln1RI4fGU1YJFudnd0heGMZCRrSHmCi+vaxvuygqyxJ+6LqrxR1d8O59gsU1cCjKYou8MGAWEH7S7dsM+ZzCgobCY1rGgkUQ4NE9ZYIlREPSavbjhXGw9T0iEG8mLr4bzlLj/w6pYnUfismsjMey3D1b5vq5EODH1ieIUQZ1n2DZcth3DmGfnSGEiZ/JV8wESyeIEsx+vDAO7izuLnH/qxIZSqnuQ9rDqA8GcmaWo3vLBAtimoVhZCdYGIcsJdvzdvu2RoLCvjJ2doW4rLJPkNCoozDsPsGCQDLum+6JFsYjxHdVnQRx5lZS2W8PBYsO+qQIU2E8R/7NPsGihAkdXhUstjCO7u5kBSHLYtVti5v97lCgjzNNyfc8k3CcCZaKdub+bvWVhfXRh/x+df8WzqZokEcFN7q/TLAkVLKnHLJNZW7EpolMYMvqK3Epc2eXSav7gP9SQGMpSneGTLDssyzOSuzVSQ7W2wSFQPSl6cE0UfdvQWTpIZt1RF8QKDPcTe4vEyxIaBSpmOWXLQxDf+r2aReejUONYeMPfUbQuxtrJli0eg5RJ1j0rGlwbwjdLsmmdf9CdOimVXv2Te3H9FJ07+lGZIIlXelsTSLdF/L51E9gMJRzd7eg7mPJpIc2WtGnRLWK4x8MYswEy+5aAvezky+M45mBkKOio0rLUidB1Zbi3hGrdSjhxjDC1nKykkywvGllL5mFaSjo8eLqs+waZSvNBGWjTNMhB/W+CsVtilQ2BURqWeklEyzGUQH8iyN6e1iSc+/ICidQpa9ltCg5mf2mRSR11LLSSyZYBTFZS+TodqD4qivW18/Zb1rA4k0tVxVo6I3jR6zXPv+KI6677OKbcO2jLxLWsawMN0fgX9+mA1aNrdoLrw45OCe4TXBRcC65GMOp06dP9xJfkC6/WOCno++8mHb46CuvyLxD2c9+PzdXZ3IxhvRgIQRLLHaLO1gdClw2lua2SsmECqzz2W/nxMugqMu9MrkYQ3qwYEiLkyt1mF18YRi+Qmn2q5ReZojst3NCn1KAN5WLMaQHC8eCJadwmQ6noeylfEwJv12BKqhxZXRoJbBSvD5D6NGe15lcjCE9WDgWLI7GRbDWR+CbHfeZbV4WyBDuiyilf1l9ZefZN16EM1N3JhdjSA8WFsHaiGcFIhhkPJUS4mxWtUAVfG/uzUeFSBNubT2zqXomF2NIDxaOBUtSgAyMrDEL/bCy2xaPjiqMxmf7IerPWqgKaobOVY1PSQBl1BnHZdqcCfXJ5GIM6cHCsWDBfLskV0zDrltqMihNxAIvxl0J7tK3BQI312ZOQmC67Tkik4sxpAcLlWDh/ECm66HHaO8bwsIfaCcKqy0+REJW923BlLhPwWIO4cP0bLP2pHIxhvRgoSNYBfVFs0Yu5LBjKf5flHO1HdRrNS0q7l8nsxKsfTulBXTWz/dGZHIxhvRgoUewSHeLhVVbpdRaz1BSstu/arFn3902jKAqCaWhxYVMLsaQHiz0CJY3jKInSjJr8MI4vJyZ+cFeOFaUu3p5VWe015GkmcHNDTK5GEN6sNAjWIWTXnJ7U9i5uHOyvpXkKgWPDWybLjUG21IwdxSZXIwhPVhIBMtSVNFW25ZwUAtUW2poTUOU7tC+fzZi4BYS/bANk48k5Ow6vWRyMYb0YCERLNOgWu9K1twzYPqf27B3qAhT1qdcOn1TErOETZXUM1W9JjtPDeHrKv9mFXF1UuH5JbPr9JLJxRjSg4UVU6EoSClirLVLvNY02I64Tp4TKLqf9TOBs2WKf+2Ulp2nRhy9rORiEmJ7dIyADupTGZlcjCE9WBjQsczVVhVlK1qjV/dGF/pRcKUkU1wQZH1cwxpOsS+bZ/I96n97PpdzqnAjytNGTT7bEH1VUZJBMrkYQ3qwMCBYBdMjyzL3xSuDcpML42CJH6tQU/Y5tOlc7GO22DVVmu6UEiJICuqCfcpzmTRSFTK5GEN6sDBSsITcyjUT+uFGlrLd62Glpr571rddlJayYFIGwQsteoJgKkmpqg0Da/a7yWRyMYb0YGGkYKkMLKW8vBlu2l7GWScu5LALdvt1kFdffsmp66+68pzAvzshk4sxpAcLIwUrQ5pT1oELN4U9a90dLI6QXZU9txZIDxY2ECzKfNaJCzdFBk/Wh4OcRMFijlAjSglBcUYcr7z2fbuwn0Qo3KBwZ304yEkULFAki951h4CiaSWTdfJJRBmDxwdPDrp9N4qTKlgZhI1OsfgYXxctqv5YbyzUEItg3Rj+sWcHWWefNEQxrAxbWcUiWDfFxtkPCWz/q8grT/5JS9gwao/dxCllEazVCNNV2scGkNkDOJtgSFbAzO5gwo5EL2R9MopFsMYhMfZsj0zl58vufRKLYI1DOM7lQfZAWkDiQUnP4kAuuYJjMfWNKXo7mkWwxsMk8aBAmlT2cOZArVCJpsKIYSVHJ1QxOPt+H86jvmt235NYBGt9bPTDod3CBtuc69pkJy/KtmqHnMFCVrLv14hVM/3ZOsZoN3Yr31EsgjWdJwb1gxLsts/RjLtFxT0lHUUQOMawKblU6YHu97sQLN4HYciTHM2rWARrOra0vSTg1GaeUP1O/XSFyuw0tWtDqxJEYqVktZSt0yDJ4XnV5y5MJ7Zb0z5T4Nqx5mNYBGs3cBfZbWrMyDEFNdrFOslgvl9gL77sexkUexZ17hqJqpOt66tYBGu3EC7FV40Q2UOeik0q7xJwQzGFrEo8xTXBpcFLAiOaeheC8ZC1e2MWwdo9lH1pafSZvu3aTEtXBWN3hOAgLuc3KtZTIeh6BNrfdp/gTSBERicbXNbt2wmLYO0XqzYC5IEbZfxtpyp6D3OB0F57Bdn2jQ4lAUGBf0o5Zd2oI9XKzhLOJz2rjIbPDXzX35JHhBRb6bHBdduxcxbB2j+yWcQ5yX8Uk28qIxQlG6aenowwXCum1GxDJXC/PDVQ54qRUwKD7KTsu3vjYAXrhpdflcZBHwjnBedWn29Z/b0JznnrzrFZuOEV16TPrQXSgwsLm5IeXFjYjNOn/h9FAe8dPLZTHQAAAABJRU5ErkJggg=='
							homelogo='https://images.search.yahoo.com/search/images;_ylt=Awr9CJ7galdgaW4AUdRXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=carolina+panthers+logo&fr2=piv-web&fr=mcafee#id=6&iurl=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2Fb20fe78a-f543-4a3f-82df-e5f9acd7e363%2Fsvn%2Fblacks-wall-decals-fh89-00496-64_1000.jpg&action=click'
							date='Dec 10th 2021'
						/>

						<Carousel.Caption>
							{/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Cardgroup
							game='Atlanta Falcons vs Carolina panthers'
							home='40'
							away='39'
							awaylogo='https://images.search.yahoo.com/search/images;_ylt=Awr9ImAca1dgnwkAFwhXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=atlanta+falcons+logo&fr2=piv-web&fr=mcafee#id=0&iurl=http%3A%2F%2Fflytothegame.com%2Fwp-content%2Fuploads%2F2014%2F07%2FAtlanta-Falcons-team-logo.png&action=click'
							homelogo='https://images.search.yahoo.com/search/images;_ylt=Awr9CJ7galdgaW4AUdRXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=carolina+panthers+logo&fr2=piv-web&fr=mcafee#id=6&iurl=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2Fb20fe78a-f543-4a3f-82df-e5f9acd7e363%2Fsvn%2Fblacks-wall-decals-fh89-00496-64_1000.jpg&action=click'
							date='Dec 10th 2021'
						/>

						<Carousel.Caption>
							{/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<Cardgroup
							game='Atlanta Falcons vs Carolina panthers'
							home='40'
							away='39'
							awaylogo='https://images.search.yahoo.com/search/images;_ylt=Awr9ImAca1dgnwkAFwhXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=atlanta+falcons+logo&fr2=piv-web&fr=mcafee#id=0&iurl=http%3A%2F%2Fflytothegame.com%2Fwp-content%2Fuploads%2F2014%2F07%2FAtlanta-Falcons-team-logo.png&action=click'
							homelogo='https://images.search.yahoo.com/search/images;_ylt=Awr9CJ7galdgaW4AUdRXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANBMDYxNV8xBHNlYwNwaXZz?p=carolina+panthers+logo&fr2=piv-web&fr=mcafee#id=6&iurl=https%3A%2F%2Fimages.homedepot-static.com%2FproductImages%2Fb20fe78a-f543-4a3f-82df-e5f9acd7e363%2Fsvn%2Fblacks-wall-decals-fh89-00496-64_1000.jpg&action=click'
							date='Dec 10th 2021'
						/>

						<Carousel.Caption>
							{/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</Fragment>
	);
};

LiveScore.propTypes = {
	auth: PropTypes.object.isRequired,
	ncaa: PropTypes.object.isRequired,
	getNCAALiveScores: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	ncaa: state.ncaa
});

export default connect(mapStateToProps, { getNCAALiveScores })(LiveScore);
