import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor'
import classnames from 'classnames'
import './editor.scss'
import { PanelBody, RangeControl } from '@wordpress/components'

export default function Edit(props) {
	const { attributes, setAttributes } = props
	const { text, alignment, style, shadow, shadowOpacity } = attributes

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment })
	}
	const onChangeText = (newText) => {
		setAttributes({ text: newText })
	}
	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity })
	}
	const toggleShadow = () => {
		setAttributes({ shadow: !shadow })
	}

	const padding = style?.spacing?.padding || {}

	const classes = classnames(`text-box-align-${alignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	})

	return (
		<>
			<InspectorControls>
				{shadow && (
					<PanelBody title={__('Shadow Settings', 'text-box')}>
						<RangeControl
							label={__('Shadow Opacity', 'text-box')}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: 'admin-page',
						title: __('Shadow', 'text-box'),
						onClick: toggleShadow,
						isActive: shadow,
					},
				]}
			>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
			<div
				{...useBlockProps({
					className: classes,
				})}
			>
				<RichText
					onChange={onChangeText}
					value={text}
					placeholder={__('Your text', 'text-box')}
					tagName="h4"
					allowedFormats={[]}
				/>
				{padding && Object.keys(padding).length > 0 && (
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							border: '2px dashed rgba(0, 0, 0, 0.3)',
							pointerEvents: 'none',
							paddingTop: padding.top,
							paddingRight: padding.right,
							paddingBottom: padding.bottom,
							paddingLeft: padding.left,
						}}
					/>
				)}
			</div>
		</>
	)
}
