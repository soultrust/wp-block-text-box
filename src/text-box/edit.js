import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor'
import './editor.scss'

export default function Edit(props) {
	const { attributes, setAttributes, style } = props
	const { text, alignment } = attributes

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment })
	}
	const onChangeText = (newText) => {
		setAttributes({ text: newText })
	}

	const padding = style?.spacing?.padding || {}

	return (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
			<div
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
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
