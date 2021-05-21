
		<script src="https://panel.mightycall.com/CallbackWidget/js/CallBack_1.0.js" type="text/javascript"></script>
		<script src="https://mightycallstorage.blob.core.windows.net/cbw/c43820c0-916f-4be3-913d-2506249dfec4__widget.js" type="text/javascript"></script>
		<script type="text/javascript">InitCallbackWidget();</script>


		const getAllPosts = (postType) => {
			try {
				return fs.readdirSync(`content/${ postType }/`).map((fileName) => {
					const slug = fileName.slice(0, -3);
					const file = fs.readFileSync(
						path.resolve(`content/${ postType }/`, fileName),
						'utf-8'
					);
					return { title: grayMatter(file).data.title, slug };
				});
			} catch (e) {
				if (e.code == 'ENOENT') {
					return false;
				}
				return [];
			}
		};

		const getContent = (postType, fileName) => {
			try {
				return fs.readFileSync(
					path.resolve(`content/${ postType }/`, `${ fileName }.md`),
					'utf-8'
				);
			} catch (e) {
				if (e.code == 'ENOENT') {
					return false;
				}
				return [];
			}
		};