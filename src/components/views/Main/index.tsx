import React, { useState } from 'react';
import styles from './style.module.scss';
import SecondaryNavbar from '../../layouts/SecondaryNavbar';
import BSlider from '../../../components/ui/BSlider';
import BCheckbox from '../../../components/ui/BCheckbox';
import BCartButton from '../../../components/ui/BCartButton';
import likedIcon from '../../../assets/images/icons/liked.svg';
import dislikedIcon from '../../../assets/images/icons/not-liked.svg';

const Main: React.FC = () => {
	const [packagingOrder, setPackagingOrder] = useState<boolean>(true);
	const [liked, setLiked] = useState<boolean>(false);
	const [quantity, setQuantity] = useState<number>(0);
	const navigationStack = ['Каталог', 'Обувь', 'Кроссовки', 'Беговые'];

	return (
		<>
			<main>
				<SecondaryNavbar navigationStack={navigationStack} />
				<h1>Кроссовки мужские Skechers Sunny Dale</h1>
				<section className={styles['product-section']}>
					<BSlider />
					<div className={styles['product-material']}>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div style={{ flex: 0.34, display: 'flex', flexDirection: 'column' }}>
								<div className={styles['product-price']}>
									<span style={{ color: '#FF3D71' }}>166 534.00 цена без скидки</span>
									<div style={{ marginTop: 24, display: 'flex', alignItems: 'center' }}>
										<h3 style={{ fontSize: 20, fontWeight: 700 }}>122 566 ₽</h3>
										<div className={styles['product-discount']}>-15%</div>
									</div>
									<div className={styles['product-order']}>
										<div className={styles['product-quantity']}>12 штук в уп.</div>
										<div style={{ marginLeft: 16, display: 'flex', alignItems: 'center' }}>
											<BCheckbox
												value={packagingOrder}
												changeValue={(value) => setPackagingOrder(value)}
											/>
											<span style={{ marginLeft: 12, fontSize: 14 }}>Заказ упаковкой</span>
										</div>
									</div>
								</div>
								<span
									className={styles['separative-line']}
									style={{ marginTop: 32, height: 1, width: '100%' }}
								/>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<div className={styles['product-delivery']}>
										<div>
											<p>Завтра</p>
											<span>Доставка</span>
										</div>
										<div>
											<p>7 шт.</p>
											<span>Тарасовка</span>
										</div>
										<div>
											<p>7 шт.</p>
											<span>Тарасовка</span>
										</div>
									</div>
									<div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between' }}>
										<BCartButton value={quantity} changeValue={(value) => setQuantity(value)} />
										<button className={styles['product-liked']} onClick={() => setLiked(!liked)}>
											<img src={liked ? likedIcon : dislikedIcon} alt='' width={24} />
										</button>
									</div>
								</div>
							</div>
							<span
								className={styles['separative-line']}
								style={{ margin: '0 10px', width: 1, height: '100%' }}
							/>
							<div className={styles['product-characteristics']}>
								<h3>Характеристики</h3>
								<div className={styles['product-info']}>
									<div>
										<p>ELC00696</p>
										<span>Код поставщика</span>
									</div>
									<div>
										<p>ELC0200000696</p>
										<span>Артикул</span>
									</div>
									<div>
										<p>ELC00696</p>
										<span>Код РАЭК</span>
									</div>
									<div>
										<p>ELC00696</p>
										<span>Код ЕТМ</span>
									</div>
									<div>
										<p>Electric used</p>
										<span>Бренд</span>
									</div>
									<div>
										<p>ELC00696</p>
										<span>Серия</span>
									</div>
									<div>
										<p>ELC0200000696</p>
										<span>Код производителя </span>
									</div>
								</div>
							</div>
						</div>
						<div className={styles['product-description']}>
							<h2>Описание товара</h2>
							<p>
								Создание приверженного покупателя специфицирует неопровержимый комплексный анализ
								ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на
								потребителя определяет возрастающий интеграл по поверхности, что известно даже
								школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор
								коммуникации. Поле направлений естественно допускает экспериментальный скачок функции,
								таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая
								прогрессия притягивает линейно зависимый пул лояльных изданий.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Main;
