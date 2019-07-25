module.exports = {
	"prompts": {
		"name": {
			"type": "string",
			"message": "Project name",
			"required": false,
			"default": "A GVT Frontend Project"
		},
		"description": {
			"type": "string",
			"message": "description",
			"required": false,
			"default": "Based On Vuejs"
		},
		"author": {
			"type": "string",
			"message": "author",
			"required": false,
			"default": "Frontend Developers For GVT"
		}
	},
	"skipInterpolation": "src/**/*.vue",
	"completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at xxx"
}
