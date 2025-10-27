import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor'
import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes
	return (
		<>
			<BlockControls>
				<AlignmentToolbar />
			</BlockControls>
			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				placeholder={__('Your text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	)
}
