require('esbuild')
  .build({
    entryPoints: ['src/index.tsx'],
    platform: 'node',
    target: ['node14'],
    bundle: true,
    external: ['./node_modules/*'],
    outdir: 'dist',
    tsconfig: 'tsconfig.build.json',
    format: 'cjs',
    charset: 'utf8',
    minify: true,
    sourcemap: true,
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
